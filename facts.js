class Facts {

	constructor(facts, schema) {
		this.all_facts = facts;
		this.schema = schema;
	}
	
	/**
	 * Get full schema or filtered by type
	 *
	 * @param type: the type of schema you want to get. 
	 *				When type is not specified (empty)
	 *				all the types are considered.
	 * @return [fatcs]: array of schemas.
	 */
	getSchema(type=""){
		if(type != ""){
			return this.schema.filter(el => el[0]==type);
		}
		return this.schema;
	}
	
	/**
	 * Get all the facts
	 *
	 * @param type: the type of fact you want to see. 
	 *				When type is not specified (empty)
	 *				all the types are considered.
	 * @return [fatcs]: array of valid and unvalid facts.
	 */
	getAllFacts(type=""){
		if(type != ""){
			return this.all_facts.filter(el => el[1]==type);
		}
		return this.all_facts;
	}

	/**
	 * Get only the valid facts
	 *
	 * @param type: the type of fact you want to see. 
	 *				When type is not specified (empty)
	 *				all the types are considered.
	 * @return [fatcs]: array of valid facts, without false
	 */
	getCurrentFacts(type=""){
		// get only desired schemas and facts
		var schema = this.getSchema(type);
		var facts = this.getAllFacts(type);

		// start filtered facts in order to push valid items
		var filtered_facts = []

		// for each schema search for valid items
		schema.forEach(function (item) {

			// Split True and False facts of the current schema 
			// at this moment the true facts are still considering 'invalid trues'
			var true_facts = facts.filter(el => (el[1]==item[0] && el[3]==true));
			var false_facts = facts.filter(el => (el[1]==item[0] && el[3]==false));
			// create true fact indexes
			var true_facts_indexes = true_facts.map(el => el[0]+'-'+el[1]);

			// if schema is one-to-one, returns the last true fact
			if(item[2]=='one') {
				true_facts.forEach(function (item,index)  {
					const item_hash = item[0]+'-'+item[1];
					if(index == true_facts_indexes.lastIndexOf(item_hash)) {
						// before to push to filtered, check if
						// this one was not removed
						if(!false_facts.find(el => el[2]==item[2])){
							filtered_facts.push(item);
						}
					}
				})
			}
			else {
				// push to filtered_schema after check removed
				filtered_facts.push(true_facts.filter(function(item){
					return !false_facts.find(el => el[2]==item[2])
				}));

			}
		});
		return filtered_facts;
	}

}

module.exports = Facts;