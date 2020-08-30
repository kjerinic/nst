package ac.fon.si.nst.controller.rest;

import ac.fon.si.nst.service.EvaluationFormService;
import ac.fon.si.nst.service.model.EvaluationFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(allowedHeaders = "*", origins = "http://localhost:4200/")
@RestController
@RequestMapping("evaluation")
public class EvaluationFormController {

    @Autowired
    EvaluationFormService evaluationFormService;

    @RequestMapping(value = "add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity addEvaluationForm(@RequestBody EvaluationFormDTO evaluationForm) {
        try {
            return ResponseEntity.ok(evaluationFormService.addEvaluationForm(evaluationForm));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error adding new evaluationForm!");
        }
    }

    @RequestMapping(value = "teacher/{id}", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity findEvaluationOverview(@PathVariable Long id) {
        return ResponseEntity.ok(evaluationFormService.findTeacherEvaluationOverview(id));
    }

}
