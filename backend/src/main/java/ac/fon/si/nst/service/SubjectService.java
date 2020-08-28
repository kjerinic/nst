package ac.fon.si.nst.service;

import ac.fon.si.nst.domain.Subject;
import java.util.List;

public interface SubjectService {
    List<Subject> findAll();

    List<Subject> findSubject(Long id);
}
