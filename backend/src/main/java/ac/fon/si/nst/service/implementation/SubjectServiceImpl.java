package ac.fon.si.nst.service.implementation;

import ac.fon.si.nst.domain.Subject;
import ac.fon.si.nst.repository.SubjectRepository;
import ac.fon.si.nst.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;

@Service
@Transactional
public class SubjectServiceImpl implements SubjectService {

    @Autowired
    SubjectRepository subjectRepository;

    @Override
    public List<Subject> findAll() {
        return subjectRepository.findAll();
    }

    @Override
    public List<Subject> findSubject(Long id) {
        return subjectRepository.findAllById(Collections.singleton(id));
    }

    @Override
    public Subject addSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

}
