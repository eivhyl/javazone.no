const data = [
    {
        month: 'Jan',
        events: []
    },
    {
        month: 'Feb',
        events: [{
            title: 'Call for speakers',
            date: 'February 12th',
            location: '-5px',
            align: 'right'
        }]
    },
    {
        month: 'Mar',
        events: [{
            title: 'Speakers workshop',
            date: 'March 1st',
            location: '-40px',
            align: 'left'
        }]
    },
    {
        month: 'Apr',
        events: [{
            title: 'CfP closes',
            date: 'April 18th',
            location: '40px',
            align: 'right'
        }]
    },
    {
        month: 'May',
        events: []
    },
    {
        month: 'Jun',
        events: [{
            title: 'Accepted speakers notified',
            date: 'June 26th',
            location: '60px',
            align: 'left'
        }]
    },
    {
        month: 'Jul',
        events: []
    },
    {
        month: 'Aug',
        events: [{
            title: 'Presentation workshop',
            date: 'August',
            location: '15px',
            align: 'right'
        }]
    },
    {
        month: 'Sep',
        events: [
        {
            title: 'Speakers dinner',
            date: 'September 6th',
            location: '-20px',
            align: 'left'
        }, {
            title: 'JavaZone 2016!',
            date: 'September 7th',
            location: '-10px',
            align: 'right'
        }]
    }
]

export default () => (
    <ul className='timeline'>
    { data.map((month, key) => (
        <li key={key} className='timeline__month'>
            <div className='timeline__month-name'>
                {month.month.split('').map((letter, lk) => <div key={lk} className='timeline__month-letter'>{letter}</div>)}
            </div>
            {
                month.events.map((event, ek) => (
                <div className={'timeline__event timeline__event--' + event.align} key={ek} style={{top: event.location}}>
                    <div className='timeline__event-title'>
                        {event.title}
                    </div>
                    <div className='timeline__event-date'>
                        {event.date}
                    </div>
                </div>
            ))}
        </li>
        ))
    }
    </ul>
);