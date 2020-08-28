package ac.fon.si.nst.service;

import ac.fon.si.nst.domain.Teacher;
import java.util.List;

public interface TeacherService {
    List<Teacher> findAll();
    List<Teacher> findTeacher(Long id);
}
