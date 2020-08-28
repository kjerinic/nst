package ac.fon.si.nst.service.implementation;

import ac.fon.si.nst.domain.Teacher;
import ac.fon.si.nst.repository.TeacherRepository;
import ac.fon.si.nst.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;

@Service
@Transactional
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    TeacherRepository teacherRepository;

    @Override
    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }

    @Override
    public List<Teacher> findTeacher(Long id) {
        return teacherRepository.findAllById(Collections.singleton(id));
    }

}
