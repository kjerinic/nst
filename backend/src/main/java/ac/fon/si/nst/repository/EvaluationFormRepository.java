package ac.fon.si.nst.repository;

import ac.fon.si.nst.domain.EvaluationForm;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EvaluationFormRepository extends JpaRepository<EvaluationForm, Long> {
    List<EvaluationForm> findEvaluationFormsByTeacherId(Long id);
}
