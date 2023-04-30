import * as Base from './base.js';
import Dataset from './Dataset';

type Bases =
	| Base.Container<Bases>
	| Dataset<Bases>
	| Base.Text
	| Base.Interactor
	| Base.Asset;
    
export default Bases;