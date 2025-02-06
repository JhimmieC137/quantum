export function IMGRectangularStyle(
    props: { 
    underlayColor: 'yellow'|'brown'|'orange',
    image: string,
    alt?: string,
    styles?: string, 
}) {
    return (
        <div className={`${props.styles} relative w-full`}>
            <img className="w-full rounded-2xl border-[2px] border-zinc-600 " src={props.image} alt={props.alt ?? 'image'} />
            <div className={`
                ${
                    props.underlayColor === 'yellow'
                      ? 'bg-primary'
                      : props.underlayColor === 'brown'
                        ? 'bg-secondary'
                        : 'bg-orange-500/70'
                }
                w-full h-full absolute top-[0.35em] left-[0.35em] rounded-2xl -z-10
            `}/>
        </div>
    )
}