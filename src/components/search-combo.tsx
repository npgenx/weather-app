/* eslint-disable */
'use client';

import { useContext, useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn, debounce } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { getGeoLocation } from '@/actions'

// import { useWeatherContextUpdate } from '@/providers/weather-provider';

type GeoCityInfo = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    feature_code: string;
    country_code: string;
    admin1_id?: number;
    admin2_id?: number;
    admin3_id?: number;
    admin4_id?: number;
    timezone: string;
    population: number;
    postcodes: number[];
    country_id: number;
    country: string;
    admin1?: string;
    admin2?: string;
    admin3?: string;
    admin4?: string;
};



export const SearchCombo = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const [cities, setCities] = useState<GeoCityInfo[]>([]);

    const getCities = async (query: string) => {
        const results = await getGeoLocation(query);

        setCities(results ?? []);
    };

    // const { setCity } = useWeatherContextUpdate();



    const getOptions = (list: GeoCityInfo[]) => {
        const options: {id:number, label: string, value:object}[] = [];
        (list.length > 0) && list.map((city:GeoCityInfo) => {
           const label = `${city.name}, ${city?.admin4 || ''} ${
               city?.admin3 || ''
           } ${city?.admin2 || ''} ${city?.admin1 || ''} (${
               city.country_code
           })`;
            options.push({
                id: city.id,
                label: label.trim(),
                value: { name: city.name,country:city.country, lat: city.latitude, lon: city.longitude },
            });
        });

        return options;
    };

    const options = getOptions(cities);

    const debouncedHandleInput = debounce(getCities, 300);

    return (
        <main>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant='outline'
                        role='combobox'
                        aria-expanded={open}
                        className='w-fit min-w-[10rem] justify-between'>
                        {selected
                            ? options.find(
                                  (option) => option.label === selected
                              )?.label
                            : 'Enter a Location...'}
                        <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-fit min-w-[20rem] p-0 '>
                    <Command shouldFilter={false}>
                        <CommandInput
                            placeholder='Search Location...'
                            className='h-9'
                            onValueChange={(value) => {
                                debouncedHandleInput(value);
                            }}
                        />
                        <CommandList>
                            <CommandEmpty>No city found.</CommandEmpty>
                            <CommandGroup>
                                {options.map((option) => (
                                    <CommandItem
                                        key={option.id}
                                        value={JSON.stringify(option.value)}
                                        onSelect={(currentValue) => {
                                            setSelected(
                                                currentValue === selected
                                                    ? ''
                                                    : currentValue
                                            );

                                            // setCity({
                                            //     name: currentValue,
                                            //     coords: city.value,
                                            // });
                                            console.log(
                                                `|+|+ the current value is : `,
                                                option
                                            );
                                            setOpen(false);
                                        }}>
                                        <Check
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                selected === option.label
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
        </main>
    );
};
