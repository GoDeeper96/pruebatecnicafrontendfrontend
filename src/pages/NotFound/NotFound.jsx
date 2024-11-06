import { Route, Routes } from 'react-router-dom';
import Nomatch from './noFound';


const RoutesWithNotFound=(props)=> {
  return (
    <Routes>
      {props.children}
      <Route path="*" element={<Nomatch/>} />
    </Routes>
  );
}
export default RoutesWithNotFound;