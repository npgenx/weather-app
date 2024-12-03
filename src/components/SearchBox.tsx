'use client';

import {useState} from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {Check, ChevronsUpDown} from 'lucide-react';
import {Button} from '@/components/ui/button';

import {getGeoLocation} from '@/actions';
import {cn, debounce} from '@/lib/utils';

import {useWeatherContextUpdate} from '@/providers/weather-provider';
import {CityInfoProps, GeoCityInfoProps} from '@/shared.types';

export const SeachBox = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const [cities, setCities] = useState<GeoCityInfoProps[]>([]);
    const {setCity} = useWeatherContextUpdate();

    const getCities = async (query: string) => {
        const results = await getGeoLocation(query);
        setCities(results);
    };

    const getOptions = (list: GeoCityInfoProps[] = []) => {
        const cityList: {id: number; label: string; value: CityInfoProps}[] =
            [];

        list.map((city: GeoCityInfoProps) => {
            const label = `${city.name}, ${city?.admin4 || ''} ${
                city?.admin3 || ''
            } ${city?.admin2 || ''} ${city?.admin1 || ''} (${
                city.country_code
            })`;
            cityList.push({
                id: city.id,
                label: label.trim(),
                value: {
                    name: city.name,
                    country: city.country,
                    tzone: city.timezone,
                    latitude: city.latitude,
                    longitude: city.longitude,
                    feature_code: city.feature_code,
                    admin1: city.admin1,
                    admin2: city.admin2,
                    admin3: city.admin3,
                    admin4: city.admin4,
                },
            });
        });

        return cityList;
    };

    const locationOptions = getOptions(cities);

    const debouncedHandleInput = debounce(getCities, 300);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className='w-fit min-w-[30rem] justify-between'>
                    {selected
                        ? locationOptions.find(
                              option =>
                                  JSON.stringify(option.value) === selected
                          )?.label
                        : 'Pick Location...'}
                    <ChevronsUpDown className='opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-fit min-w-[30rem] p-0 '>
                <Command shouldFilter={false}>
                    <CommandInput
                        placeholder='Search Location...'
                        className='h-9'
                        onValueChange={value => {
                            debouncedHandleInput(value);
                        }}
                    />
                    <CommandList>
                        <CommandEmpty>No locations found.</CommandEmpty>
                        <CommandGroup>
                            {locationOptions.map(option => (
                                <CommandItem
                                    key={option.id}
                                    value={JSON.stringify(option.value)}
                                    onSelect={currentValue => {
                                        setSelected(
                                            currentValue === selected
                                                ? ''
                                                : currentValue
                                        );

                                        setCity(option.value);
                                        setOpen(false);
                                    }}>
                                    <Check
                                        className={cn(
                                            'mr-2 h-4 w-4',
                                            selected ===
                                                JSON.stringify(option.value)
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
