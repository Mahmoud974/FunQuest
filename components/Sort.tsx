'use client';
import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
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
import { useTemplate } from '@/app/utils/hooks/useTemplate';
import { useSortStore } from '@/store/store';

const frameworks = [
  {
    value: 'less',
    label: 'le - cher',
  },
  {
    value: 'more',
    label: 'le + cher',
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  // const [sortHotel, setSortHotel] = React.useState<number[]>();
  const { data } = useTemplate();
  const { hotelSort, sortHotel } = useSortStore();
  console.log(sortHotel);

  // const hotelSort = (sortType: string) => {
  //   if (sortType === 'less') {
  //     setSortHotel(
  //       data?.sort((a: any, b: any) => a.pricePerNight - b.pricePerNight)
  //     );
  //     console.log(sortHotel);
  //   } else if (sortType === 'more') {
  //     setSortHotel(
  //       data?.sort((a: any, b: any) => b.pricePerNight - a.pricePerNight)
  //     );
  //     console.log(sortHotel);
  //   }
  //   console.log('Trié:', sortType);
  // };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : '↑ ↓  Trier par :'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>Triez par :</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    const selectedValue =
                      currentValue === value ? '' : currentValue;
                    setValue(selectedValue);
                    hotelSort(selectedValue); // Appelle la fonction de tri avec la valeur sélectionnée
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
