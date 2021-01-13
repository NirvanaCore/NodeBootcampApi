// @desc   Get all bootcamps
//@route   GET /api/v1/bootcamps
//@access  Public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: 'show all BootCamps',
	});
};

// @desc   Get single bootcamp
//@route   GET /api/v1/bootcamps/:id
//@access  Public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `get BootCamp ${req.params.id}`,
	});
};

// @desc   create new bootcamp
//@route   POST /api/v1/bootcamps
//@access  Private (logged in /send token)
exports.createBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: 'Create new BootCamp',
	});
};

// @desc   Update bootcamp
//@route   PUT /api/v1/bootcamps/:id
//@access  Private (logged in /send token)
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Update BootCamp ${req.params.id}`,
	});
};

// @desc   delete single bootcamp
//@route   DELETE /api/v1/bootcamps/:id
//@access  Private (logged in /send token)
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Delete BootCamp ${req.params.id}`,
	});
};
