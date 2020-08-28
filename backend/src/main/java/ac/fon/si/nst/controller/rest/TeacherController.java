package ac.fon.si.nst.controller.rest;

import ac.fon.si.nst.domain.Teacher;
import ac.fon.si.nst.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        List<Teacher> list = teacherService.findTeacher(id);
        return ResponseEntity.ok(teacherService.findTeacher(id));
    }

}
