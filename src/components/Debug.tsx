'use client';

import { useWeatherContext } from '@/providers/weather-provider';

const MyDebuggerData = () => {
    const {  city } = useWeatherContext();

    // const fiveDaySummary = Object.keys(theDailies.summary)
    //     .filter((key) => !key.includes(day))
    //     .reduce((cur, key) => {
    //         return Object.assign(cur, { [key]: theDailies.summary[key] });
    //     }, {});
    return (
        <div className='pt-7 pb-5 px-4 pl-40 w-full  max-h-screen overflow-y-auto  align-center border rounded-lg flex flex-col items-center gap-4 dark:bg-dark-grey shadow-sm dark:shadow-none'>
            <h2>The Debugger Output</h2>
            <dl>
                <dt>
                    <b>Current Info</b>
                </dt>
                <dd>
                    <pre>{JSON.stringify(city, null, 2)}</pre>
                </dd>

                {/* <dt>
                    <b>Forecast summary</b>
                </dt>
                <dd>
                    <pre>{JSON.stringify(fiveDaySummary, null, 2)}</pre>
                </dd> */}
            </dl>
        </div>
    );
};

export default MyDebuggerData;
