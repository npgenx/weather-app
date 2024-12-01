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

import {getGeoLocation} from '@/actions/getGeoLocation';
import {cn, debounce} from '@/lib/utils';

import {useWeatherContextUpdate} from '@/providers/weather-provider';
import {CityInfoProps, GeoCityInfo} from '@/shared.types';


export const SeachBox = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const [cities, setCities] = useState<GeoCityInfo[]>([]);
    const {setCity} = useWeatherContextUpdate();

    const getCities = async (query: string) => {
        const results = await getGeoLocation(query);
        setCities(results);
    };

    const getOptions = (list: GeoCityInfo[]) => {
        const cityList: { id: number; label: string; value: CityInfoProps }[] = [];
        
            list.map((city: GeoCityInfo) => {
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
                    },
                });
            });

        return cityList;
    };

    const options = getOptions(cities);

    const debouncedHandleInput = debounce(getCities, 300);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className='w-[200px] justify-between'>
                    {selected
                        ? options.find(
                              option =>
                                  JSON.stringify(option.value) === selected
                          )?.label
                        : 'Pick Location...'}
                    <ChevronsUpDown className='opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0'>
                <Command shouldFilter={false}>
                    <CommandInput
                        placeholder='Search Location...'
                        className='h-9'
                        onValueChange={value => {
                            debouncedHandleInput(value);
                            // console.log('value is ', value)
                        }}
                    />
                    <CommandList>
                        <CommandEmpty>No locations found.</CommandEmpty>
                        <CommandGroup>
                            {options.map(option => (
                                <CommandItem
                                    key={option.id}
                                    value={JSON.stringify(option.value)}
                                    onSelect={currentValue => {
                                        setSelected(
                                            currentValue === selected
                                                ? ''
                                                : currentValue
                                        );

                                        console.log('\=\=\ Selected :', option)
                                        setCity(option.value);
                                        setOpen(false);
                                    }}>
                                    <Check
                                        className={cn(
                                            'ml-auto',
                                            selected ===
                                                JSON.stringify(option.value)
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
