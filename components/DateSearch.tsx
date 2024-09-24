'use client';

import * as React from 'react';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

// Fonction utilitaire pour obtenir la date actuelle et la date future
const getInitialDates = () => {
  const today = new Date();
  const endDate = addDays(today, 30); // Par exemple, 30 jours à partir d'aujourd'hui
  return { from: today, to: endDate };
};

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>(
    getInitialDates()
  );
  const today = new Date();

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              'md:w-[300px] md:justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="md:mr-2 md:h-4 md:w-4 w-12" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, yyyy')} -{' '}
                  {format(date.to, 'LLL dd, yyyy')}
                </>
              ) : (
                format(date.from, 'LLL dd, yyyy')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={{ before: today }} // Désactiver les dates antérieures à aujourd'hui
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
