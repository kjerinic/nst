package ac.fon.si.nst.controller.rest;

import ac.fon.si.nst.domain.Module;
import ac.fon.si.nst.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("module")
public class ModulesController {
    @Autowired
    private ModuleService moduleService;

    @RequestMapping("all")
    public @ResponseBody
    ResponseEntity findAll() {
        return ResponseEntity.ok(moduleService.findAll());
    }

    @RequestMapping("{id}")
    public @ResponseBody ResponseEntity findModule(@PathVariable Long id){
        return ResponseEntity.ok(moduleService.findModule(id));
    }

    @RequestMapping(value = "add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity addModule(@RequestBody Module module){
        try {
            return ResponseEntity.ok((moduleService.addModule(module)));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error adding new module!");
        }
    }

}
