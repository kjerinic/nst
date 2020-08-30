package ac.fon.si.nst.service.implementation;

import ac.fon.si.nst.domain.EvaluationForm;
import ac.fon.si.nst.domain.TeacherEvaluationOverviewDTO;
import ac.fon.si.nst.repository.EvaluationFormRepository;
import ac.fon.si.nst.service.EvaluationFormService;
import ac.fon.si.nst.service.model.EvaluationFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

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

    @Override
    public TeacherEvaluationOverviewDTO findTeacherEvaluationOverview(Long teacherId) {
        TeacherEvaluationOverviewDTO overviewDTO = new TeacherEvaluationOverviewDTO();
        List<EvaluationForm> forms = this.evaluationFormRepository.findEvaluationFormsByTeacherId(teacherId);

        if (forms != null && !forms.isEmpty()) {
            int totalGrade = 0;
            int numOfGrades = 0;
            List<String> comments = new ArrayList<>();

            for (EvaluationForm form : forms) {
                if (form.getQuestion1() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion1();
                }
                if (form.getQuestion2() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion2();
                }
                if (form.getQuestion3() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion3();
                }
                if (form.getQuestion4() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion4();
                }
                if (form.getQuestion5() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion5();
                }
                if (form.getQuestion6() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion6();
                }
                if (form.getQuestion7() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion7();
                }
                if (form.getQuestion8() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion8();
                }
                if (form.getQuestion9() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion9();
                }
                if (form.getQuestion10() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion10();
                }
                if (form.getQuestion11() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion11();
                }
                if (form.getQuestion12() != 6) {
                    numOfGrades++;
                    totalGrade += form.getQuestion12();
                }

                if (form.getComment() != null && !form.getComment().isBlank())
                    comments.add(form.getComment());
            }

            overviewDTO.setTeacherId(teacherId);
            overviewDTO.setAverageQuestionGrade(totalGrade/numOfGrades);
            overviewDTO.setComments(comments);
        }

        return overviewDTO;
    }
}
