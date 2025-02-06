export default function DropdownButton(
    props: {
        border: 'brown'|'yellow'|'orange'|'none',
        background: 'brown'|'yellow'|'orange'|'none'|'white',
        style?: string,
        content: React.ReactNode,
    }) {

    

    return (
        <div className="flex flex-col justify-center items-center">
            <div className={`
                ${props.border === 'brown'
                    ? 'border-[2px] border-secondary'
                    : props.border === 'yellow'
                    ? 'border-[2px] border-primary'
                    : props.border === 'orange'
                        ? 'border-[2px] border-orange-600'
                        : 'border-none' }
                ${props.background === 'brown'
                    ? 'bg-secondary text-primary'
                    : props.background === 'yellow'
                    ? 'bg-primary text-secondary'
                    : props.background === 'orange'
                        ? 'bg-orange-600 text-zinc-200'
                        : props.background === 'white' 
                        ? 'bg-zinc-200 text-zinc-700'
                        : 'bg-transparent text-primary'}
                ${props.style}
                relative flex justify-center items-center overflow-hidden px-7 py-4 rounded-2xl border-[2px] text-xl font-medium text-secondary
            `}>
                <span className="relative z-10">{props.content}</span>
            </div>
            <>
            </>

        </div>
    )
}
