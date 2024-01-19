import getBillboard from "@/actions/get-billboard";
import  Container  from "@/components/ui/container"
import  Billboard  from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList  from "@/components/product-list";
const HomePage=async()=>{
    const products=await getProducts({isFeatured:true});
    const billboard=await getBillboard("39a99a66-405a-4f6d-b75f-7ba89d3cae47");
    return(
       <Container>
        <div className="space-y-10 pb-10">
            <Billboard data={billboard}/>
        
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products}/>
        
            </div>
        </div>
       </Container>
    );
}
export default HomePage;