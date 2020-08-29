package ac.fon.si.nst.controller.rest;

import ac.fon.si.nst.domain.Subject;
import ac.fon.si.nst.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return ResponseEntity.ok(subjectService.findSubject(id));
    }

    @RequestMapping(value = "add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity addSubject(@RequestBody Subject subject){
        try {
            return ResponseEntity.ok((subjectService.addSubject(subject)));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error adding new subject!");
        }
    }

}
