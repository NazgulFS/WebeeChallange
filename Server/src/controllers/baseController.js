const AppError = require('../utils/appError');

exports.deleteOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            return next(new AppError(404, 'fail', `No sensor found with that ${id}`), req, res, next);
        }

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        next(error);
    }
};

exports.updateOne = Model => async (req, res, next) => {
    console.log(req.body)
    const id = req.params.id;

    try {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body);

        if (!doc) {
            return next(new AppError(404, 'fail', `No sensor found with that ${id}`), req, res, next);
        }

        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        });

    } catch (error) {
        next(error);
    }
};

exports.createOne = Model => async (req, res, next) => {
    console.log(req.body)
    try {
        const doc = await Model.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                doc
            }
        });

    } catch (error) {
        next(error);
        console.log(error)
    }
};

exports.getOne = Model => async (req, res, next) => {
    const id = req.params.id
    try {
        const doc = await Model.findById(id);

        if (!doc) {
            return next(new AppError(404, 'fail', `No sensor found with id ${id}`), req, res, next);
        }

        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        });
    } catch (error) {
        next(error);
    }
};

exports.getAll = Model => async (req, res, next) => {
    try {
        const doc = await Model.find()

        res.status(200).json({
            status: 'success',
            results: doc.length,
            data: {
                doc
            }
        });

    } catch (error) {
        next(error);
    }

};