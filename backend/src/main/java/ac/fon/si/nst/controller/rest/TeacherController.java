package ac.fon.si.nst.controller.rest;

import ac.fon.si.nst.domain.Teacher;
import ac.fon.si.nst.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("teacher")
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @RequestMapping("all")
    public @ResponseBody
    ResponseEntity findAll() {
        return ResponseEntity.ok(teacherService.findAll());
    }

    @RequestMapping("{id}")
    public @ResponseBody ResponseEntity findTeacher(@PathVariable Long id){
        return ResponseEntity.ok(teacherService.findTeacher(id));
    }

    @RequestMapping(value = "add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity addTeacher(@RequestBody Teacher teacher){
        try {
            return ResponseEntity.ok((teacherService.addTeacher(teacher)));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error adding new teacher!");
        }
    }

}
