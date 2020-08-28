package ac.fon.si.nst.service;

import ac.fon.si.nst.domain.Module;
import java.util.List;

public interface ModuleService {
    List<Module> findAll();
    List<Module> findModule(Long id);
}
