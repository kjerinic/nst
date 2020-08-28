package ac.fon.si.nst.controller.rest;

import ac.fon.si.nst.domain.Subject;
import ac.fon.si.nst.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("subject")
public class SubjectController {
    @Autowired
    private SubjectService subjectService;

    @RequestMapping("all")
    public @ResponseBody
    ResponseEntity findAll() {
        return ResponseEntity.ok(subjectService.findAll());
    }

    @RequestMapping("{id}")
    public @ResponseBody ResponseEntity findSubject(@PathVariable Long id){
        List<Subject> list = subjectService.findSubject(id);
        return ResponseEntity.ok(subjectService.findSubject(id));
    }
}
