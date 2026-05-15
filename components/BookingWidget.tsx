'use client';

import { useEffect, useRef, useState } from 'react';
import { DayPicker, type DateRange } from 'react-day-picker';
import { ptBR, enUS, es as esLocale } from 'date-fns/locale';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { LuMinus, LuPlus, LuChevronDown, LuCalendar, LuUsers } from 'react-icons/lu';
import { useLang } from '@/lib/LanguageContext';
import { bookingUrl } from '@/lib/links';

type Popover = 'dates' | 'guests' | null;

export default function BookingWidget() {
    const { lang, t } = useLang();
    const tb = t.booking;

    const [range,    setRange]    = useState<DateRange | undefined>(undefined);
    const [adults,   setAdults]   = useState(2);
    const [children, setChildren] = useState(0);
    const [open,     setOpen]     = useState<Popover>(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const today    = new Date(); today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
        setRange({ from: today, to: tomorrow });
    }, []);

    useEffect(() => {
        const onDown = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
        };
        const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
        document.addEventListener('mousedown', onDown);
        document.addEventListener('keydown',   onEsc);
        return () => {
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('keydown',   onEsc);
        };
    }, []);

    const dpLocale = lang === 'en' ? enUS : lang === 'es' ? esLocale : ptBR;
    const fmt = (d?: Date) => (d ? format(d, tb.dateFormat, { locale: dpLocale }) : tb.placeholder);

    const guestsLabel = (() => {
        const parts = [`${adults} ${adults === 1 ? tb.adult : tb.adultPlural}`];
        if (children > 0) parts.push(`${children} ${children === 1 ? tb.child : tb.childPlural}`);
        return parts.join(', ');
    })();

    const handleBook = () => {
        const url = bookingUrl({
            checkin:  range?.from ? format(range.from, 'yyyy-MM-dd') : undefined,
            checkout: range?.to   ? format(range.to,   'yyyy-MM-dd') : undefined,
            guests:   adults + children,
        });
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const toggle = (which: Popover) => setOpen(curr => (curr === which ? null : which));

    return (
        <div className="booking-widget" id="reservar" ref={ref}>
            <div className="bw-group bw-group-dates">
                <button
                    type="button"
                    className={`bw-field${open === 'dates' ? ' is-open' : ''}`}
                    onClick={() => toggle('dates')}
                >
                    <span className="bw-label"><LuCalendar /> {tb.checkin}</span>
                    <span className="bw-value">{fmt(range?.from)}</span>
                </button>

                <div className="bw-divider" />

                <button
                    type="button"
                    className={`bw-field${open === 'dates' ? ' is-open' : ''}`}
                    onClick={() => toggle('dates')}
                >
                    <span className="bw-label"><LuCalendar /> {tb.checkout}</span>
                    <span className="bw-value">{fmt(range?.to)}</span>
                </button>

                {open === 'dates' && (
                    <div className="bw-popover bw-popover-dates" role="dialog">
                        <DayPicker
                            mode="range"
                            numberOfMonths={2}
                            selected={range}
                            onSelect={setRange}
                            locale={dpLocale}
                            disabled={{ before: new Date() }}
                            showOutsideDays
                        />
                        <div className="bw-popover-foot">
                            <button type="button" className="bw-popover-clear" onClick={() => setRange(undefined)}>
                                {tb.clear}
                            </button>
                            <button type="button" className="bw-popover-done" onClick={() => setOpen(null)}>
                                {tb.done}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="bw-divider" />

            <div className="bw-group bw-group-guests">
                <button
                    type="button"
                    className={`bw-field bw-field-guests${open === 'guests' ? ' is-open' : ''}`}
                    onClick={() => toggle('guests')}
                >
                    <span className="bw-label"><LuUsers /> {tb.guests}</span>
                    <span className="bw-value">
                        {guestsLabel}
                        <LuChevronDown className={`bw-caret${open === 'guests' ? ' open' : ''}`} />
                    </span>
                </button>

                {open === 'guests' && (
                    <div className="bw-popover bw-popover-guests" role="dialog">
                        <Stepper
                            title={tb.adults}  sub={tb.adultsSub}
                            value={adults} min={1} max={6} onChange={setAdults}
                            decLabel={`− ${tb.adults}`} incLabel={`+ ${tb.adults}`}
                        />
                        <Stepper
                            title={tb.children} sub={tb.childrenSub}
                            value={children} min={0} max={4} onChange={setChildren}
                            decLabel={`− ${tb.children}`} incLabel={`+ ${tb.children}`}
                        />
                        <button type="button" className="bw-stepper-done" onClick={() => setOpen(null)}>
                            {tb.done}
                        </button>
                    </div>
                )}
            </div>

            <button type="button" className="bw-cta" onClick={handleBook}>
                {tb.verify}
            </button>
        </div>
    );
}

function Stepper({
    title, sub, value, min, max, onChange, decLabel, incLabel,
}: {
    title: string; sub: string; value: number;
    min: number; max: number; onChange: (n: number) => void;
    decLabel: string; incLabel: string;
}) {
    return (
        <div className="bw-stepper">
            <div className="bw-stepper-info">
                <strong>{title}</strong>
                <small>{sub}</small>
            </div>
            <div className="bw-stepper-ctrl">
                <button
                    type="button"
                    onClick={() => onChange(Math.max(min, value - 1))}
                    disabled={value <= min}
                    aria-label={decLabel}
                >
                    <LuMinus />
                </button>
                <span>{value}</span>
                <button
                    type="button"
                    onClick={() => onChange(Math.min(max, value + 1))}
                    disabled={value >= max}
                    aria-label={incLabel}
                >
                    <LuPlus />
                </button>
            </div>
        </div>
    );
}
