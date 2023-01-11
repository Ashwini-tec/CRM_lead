import { Router } from 'express';
import * as claim  from '../claims/claimController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as claimSchema from './claimValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create claim
 */
router.post(
    '/claimForm',
    validation(claimSchema.create()),
    claim.createClaim
);

/**
 * get unclaim leads
 */
router.get(
    '/claim',
    authenticate.verifyUser,
    claim.getClaim
);

/**
 * get claim by id
 */
router.get(
    '/claim/:id',
    authenticate.verifyUser,
    claim.getById
);

/**
 * aggign claim detail
 */
router.put(
    '/claim/:id',
    authenticate.verifyUser,
    claim.updateClaim
);


/**
 * get claim detail for login user
 */
router.get(
    '/claimDetail',
    authenticate.verifyUser,
    claim.getClaimForUser
);

export default router;
