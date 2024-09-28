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
import {
  useTemplate,
  useTemplateActivities,
} from '@/app/utils/hooks/useTemplate';
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
    value: 'reset',
    label: 'reset',
  },
];

export function ComboboxDemo({ booleanData }: any) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  // Renommer les variables pour clarifier leur utilisation
  const { data: hotelsData, isLoading: hotelsLoading } = useTemplate(); // Données des hôtels
  const { data: activitiesData, isLoading: activitiesLoading } =
    useTemplateActivities(); // Données des activités

  const { sortDropdown } = useSortStore();

  // Vérifie si les données sont encore en cours de chargement
  if (hotelsLoading || activitiesLoading) {
    return <p>Chargement des données...</p>;
  }

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
                    if (selectedValue !== 'reset') {
                      sortDropdown(
                        selectedValue,
                        booleanData ? activitiesData : hotelsData
                      );
                    } else {
                      // Réinitialiser l'état si on choisit 'reset'
                      sortDropdown(
                        'reset',
                        booleanData ? activitiesData : hotelsData
                      );
                    }

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
