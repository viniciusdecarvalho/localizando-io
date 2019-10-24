import * as firebase from 'firebase/app';

const PK_NAME = "key";

export class FirebaseModel {
	
	static toJSON(model: any): any {
		const data = {};

		data['createdAt'] = data['createdAt'] || firebase.database.ServerValue.TIMESTAMP;
		
		Object
		.getOwnPropertyNames(model)
		.filter(k => k != PK_NAME)
		.filter(k => typeof(this[k]) != "function")
		.forEach(key => {
			let value = model[key].valueOf();
			
			data[key] = !Array.isArray(value) ? FirebaseModel.normalize(value) 
											  : value.map(FirebaseModel.normalize);
		});

		data['lastUpdate'] = firebase.database.ServerValue.TIMESTAMP;

		return data;
	}

	private static normalize(value: any) {
		if (value[PK_NAME]) {
			const pk = {};
			pk[PK_NAME] = value[PK_NAME];
			return pk;
		} else {
			return value;
		}
	}
}
