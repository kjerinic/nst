package ac.fon.si.nst.service;

import ac.fon.si.nst.domain.EvaluationForm;
import ac.fon.si.nst.domain.TeacherEvaluationOverviewDTO;
import ac.fon.si.nst.service.model.EvaluationFormDTO;

public interface EvaluationFormService {
    EvaluationForm addEvaluationForm(EvaluationFormDTO form);
    TeacherEvaluationOverviewDTO findTeacherEvaluationOverview(Long id);
}
