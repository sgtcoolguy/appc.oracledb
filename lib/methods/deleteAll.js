/**
 * Deletes all the data records.
 * @param {Arrow.Model} Model The model class being updated.
 * @param {Function} callback Callback passed an Error object (or null if successful), and the deleted models.
 */
exports.deleteAll = function (Model, callback) {
	var table = this.getTableName(Model),
		query = 'DELETE FROM ' + table;

	this._query(query, callback, function (rows, result) {
		callback(null, result && result.rowsAffected || 0);
	});
};
