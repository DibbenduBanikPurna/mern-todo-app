const  express=require('express')
const router=express.Router();
const profileController=require('../controller/profileController')
const verifyTokenMiddleware=require('../middleware/verifyTokenMiddleware')
const todoListController=require('../controller/todoListController')

//user profile
router.post('/createProfile', profileController.createProfile )
router.post('/userlogin', profileController.userLogin)
router.get('/readProfile', verifyTokenMiddleware, profileController.readProfile)
router.post('/updateProfile', verifyTokenMiddleware,profileController.updateProfile)


//to-do operation

router.post('/createTodo', verifyTokenMiddleware,todoListController.createTodo)
router.get('/todo',verifyTokenMiddleware,todoListController.selectTodo)
router.post('/updateTodo/:id', verifyTokenMiddleware, todoListController.updateTodo)
router.post('/updateStatus/:id', verifyTokenMiddleware, todoListController.updateStatus)
router.post('/removeTodo/:id',verifyTokenMiddleware,todoListController.removeTodo)
router.get('/selectTodoByStatus',verifyTokenMiddleware,todoListController.selectTodoByStatus)
router.get('/selectTodoByDate',verifyTokenMiddleware,todoListController.selectTodoByDate)
module.exports=router;