
import ProfileCard from 'components/SingleVendorProfile';
import team from '../assets/img/team-1-800x800.jpg';

export default function SingleVendor() {
    const products=['Pizza','Burger','Bread'];

    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <ProfileCard image={team} rating='10' permit='2' name='John' address='Los Angeles, California' description=' An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.' products={products}/>
                    </div>
                </div>
            </div>
        </>
    );
}
