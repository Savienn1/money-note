
type HeaderProps = {
  className?: string;
};

const Header = ( {className} : HeaderProps) => {
    return (
        <div className= {`w-full flex-row h-fit g-3 mt-3 p-2 ${className}`}>
            <h1 className="font-sans font-bold text-3xl">Hi, Caroline</h1>
            <h3 className="font-sans font-medium text-xl">Your personal Tracking Wealth</h3>
        </div>
    )
}
export default Header