package ac.fon.si.nst.service.implementation;

import ac.fon.si.nst.domain.Module;
import ac.fon.si.nst.repository.ModuleRepository;
import ac.fon.si.nst.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;

@Service
@Transactional
public class ModuleServiceImpl implements ModuleService {

    @Autowired
    ModuleRepository moduleRepository;

    @Override
    public List<Module> findAll() {
        return moduleRepository.findAll();
    }

    @Override
    public List<Module> findModule(Long id) {
        return moduleRepository.findAllById(Collections.singleton(id));
    }

}
