import profile from '../assets/images/profile.png'
function Header() {
    return (
        <div>
            <div className='flex justify-between items-center border-b py-5'>
                <div>
                    <h2 className='text-3xl font-bold'>Knowledge Cafe</h2>
                </div>
                <div>
                    <img src={profile} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;