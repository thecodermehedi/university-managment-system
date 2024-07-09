import validateRequest from '../../middlewares/validateRequest';
import createRouter from '../../utils/createRouter';
import { CourseControllers } from './course.controller';
import { CourseValidations } from './course.validator';

const router = createRouter();

router.post('/create-course', validateRequest(CourseValidations.createCourseValidationSchema), CourseControllers.createCourse)

router.get('/', CourseControllers.getCourses);

router.get('/:id', CourseControllers.getCourse);

router.patch(
  '/:id',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);

router.delete('/:id', CourseControllers.deleteCourse);

export const CourseRoutes = router;