export default function ScreenLoader({loaded} : {loaded?: boolean}) {
    return (
        <div className={`${loaded? 'disappear' : ''} preloader-animation`}>
            <div className="w-1/6 m-auto justify-center">
                <img
                    className="w-full m-auto loader-bounce"
                    style={{ animationDelay: '0ms' }}
                    src="/part_roof.png"
                    alt=""
                />
                <img
                    className="w-[6px] m-auto loader-bounce"
                    style={{ animationDelay: '100ms' }}
                    src="/part_hex_bolt.png"
                    alt=""
                />
                <img
                    className="w-[6px] m-auto"
                    // style={{ animationDelay: '200ms' }}
                    src="/part_Q.png"
                    alt=""
                />
            </div>
        </div>
    )
}