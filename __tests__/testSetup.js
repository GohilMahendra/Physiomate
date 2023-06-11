import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme with the React Native adapter
configure({ adapter: new Adapter() });


jest.mock("@react-native-firebase/auth",()=>{})
jest.mock("@react-native-firebase/firestore",()=>{})