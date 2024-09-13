'use client';
import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
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
  {
    value: 'remettre',
    label: 'remettre',
  },
];
export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const { data } = useTemplate(); // Les données de l'API ou des hôtels
  const { sortHotel, hotelSort } = useSortStore(); // Accède aux hôtels triés et à la fonction de tri

  React.useEffect(() => {
    // console.log(sortHotel);
  }, [sortHotel]);
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

                    // Appelle la fonction de tri avec les données et le type de tri sélectionné
                    hotelSort(selectedValue, data);

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
