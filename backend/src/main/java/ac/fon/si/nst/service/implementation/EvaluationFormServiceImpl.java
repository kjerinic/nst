package ac.fon.si.nst.service.implementation;

import ac.fon.si.nst.domain.EvaluationForm;
import ac.fon.si.nst.repository.EvaluationFormRepository;
import ac.fon.si.nst.service.EvaluationFormService;
import ac.fon.si.nst.service.model.EvaluationFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

@Service
@Transactional
public class EvaluationFormServiceImpl implements EvaluationFormService {

    @Autowired
    EvaluationFormRepository evaluationFormRepository;

    @Override
    public EvaluationForm addEvaluationForm(EvaluationFormDTO form) {
        EvaluationForm mappedForm = new EvaluationForm(form);
        return this.evaluationFormRepository.save(mappedForm);
    }
}
