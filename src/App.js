import { Route, Routes } from 'react-router-dom';
import Biography from './components/Biography';
import Layout from './components/Layout'
import FamousWork from './components/FamousWork';
import Collection from './components/Collection';
import AddPainting from './components/AddPainting';
import { useState } from 'react';

function App() {
  const [listOfArts,setListOfArts]=useState([
    {imgSource:"https://blog.singulart.com/wp-content/uploads/2019/08/tour_img-312981-148-1.jpg",name:"The Last Supper",year:"1498"},
    {imgSource:"https://media.cnn.com/api/v1/images/stellar/prod/131107152744-mona-lisa.jpg?q=w_2000,h_3000,x_0,y_0,c_fill",name:"Mona Lisa",year:"1503-05"},
    {imgSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lady_with_an_Ermine_-_Leonardo_da_Vinci_%28adjusted_levels%29.jpg/1200px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_%28adjusted_levels%29.jpg",name:"Lady with an Ermine",year:"1489-91"},
    {imgSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg/1200px-Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg",name:"Portrait of Ginevra de Benci",year:"1474—76"},
    {imgSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Leonardo_da_Vinci_-_Virgin_and_Child_with_St_Anne_C2RMF_retouched.jpg/1200px-Leonardo_da_Vinci_-_Virgin_and_Child_with_St_Anne_C2RMF_retouched.jpg",name:"Virgin and Child",year:"1510"},
    {imgSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Leonardo_da_Vinci_%28attrib%29-_la_Belle_Ferroniere.jpg/1200px-Leonardo_da_Vinci_%28attrib%29-_la_Belle_Ferroniere.jpg",name:"La belle Ferroniere",year:"1490"},
    {imgSource:"https://www.leonardodavinci.net/images/gallery/self-portrait.jpg",name:"Self Portrait",year:"1512"},
    {imgSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Leonardo_da_Vinci_attributed_-_Madonna_Litta.jpg/640px-Leonardo_da_Vinci_attributed_-_Madonna_Litta.jpg",name:"Madonna Litta",year:"1490-91"},
    {imgSource:"https://uploads1.wikiart.org/images/leonardo-da-vinci/woman-s-head.jpg!Large.jpg",name:"Woman's Head",year:"1506–08"},
    ]);

  const handleAddPicture = (newPainting) => {
    console.log(newPainting);
    setListOfArts([...listOfArts, newPainting]);
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Biography/>} />
          <Route path='famous' element={<FamousWork/>} />
          <Route path='collection' element={<Collection paintings={listOfArts}/>} />
          <Route path='add' element={<AddPainting onAddPicture={handleAddPicture}/>}/>
          <Route path='*' element={<p>Page Not Found!</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;