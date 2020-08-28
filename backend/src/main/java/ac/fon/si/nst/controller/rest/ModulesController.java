package ac.fon.si.nst.controller.rest;

import ac.fon.si.nst.domain.Module;
import ac.fon.si.nst.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        List<Module> list = moduleService.findModule(id);
        return ResponseEntity.ok(moduleService.findModule(id));
    }
}
