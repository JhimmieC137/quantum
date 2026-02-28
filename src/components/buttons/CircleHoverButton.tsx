export default function CircleHoverButton(
    props: {
        border: 'brown'|'yellow'|'orange'|'none',
        background: 'brown'|'yellow'|'orange'|'none',
        hoverBackground: 'brown'|'yellow'|'orange'|'none',
        style?: string,
        content: string
    }) {

    return (
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
                    : 'bg-transparent text-primary'}
            ${props.hoverBackground === 'brown'
                ? 'before:bg-secondary hover:shadow-secondary hover:text-primary'
                : props.hoverBackground === 'yellow'
                  ? 'before:bg-primary hover:shadow-primary hover:text-secondary'
                  : props.hoverBackground === 'orange'
                    ? 'before:bg-orange-600 hover:shadow-orange-600 hover:text-zinc-200'
                    : 'before:bg-transparent hover:shadow-none' }
                ${props.style}
                relative cursor-pointer flex justify-center items-center overflow-hidden p-3 rounded-2xl  text-lg font-medium transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:duration-500 before:ease-out hover:before:h-80 hover:before:w-80
        `}>
            <span className="relative z-10">{props.content}</span>
        </div>
    )
}