export default function About() {
    return(
        <div className="container p-9">
            <div className=" text-center text-3xl font-semibold text-teal-600 mb-15">Welcome to Tasty Recipes – your ultimate culinary companion!</div>
            
            <div className="flex flex-col align-center mb-3 gap-10">
                <div className="text-lg">
                Our mission is to inspire home cooks with delicious, easy-to-follow recipes from around the world. Whether you're a beginner or a seasoned chef, we offer a diverse collection of dishes, from hearty beef stews to refreshing vegan desserts.
                </div>
                <div className="text-lg text-teal-600">
                Explore recipes by category, save your favorites, and discover new flavors every day. Happy cooking!
                </div>
            </div>

            

            <img className="mt-15" src="https://images.unsplash.com/photo-1606787504667-961f789e78e6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    )
}