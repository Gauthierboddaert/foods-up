import CardCategoriesLoader from "../../category/components/CardCategoriesLoader";
import CardRecipeLoader from "../../recipe/components/CardRecipeLoader";

const Home = () => {
    console.log('go')

    return (
        <div className="w-full h-screen">
            <CardCategoriesLoader/>
            <div className="w-full flex justify-center">
                <CardRecipeLoader/>    
            </div>
        </div>
    )
}

export default Home;