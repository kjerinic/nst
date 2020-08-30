package ac.fon.si.nst.domain;

import ac.fon.si.nst.service.model.EvaluationFormDTO;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;

@SuppressWarnings("JpaDataSourceORMInspection")
@Entity
@Table(name = "evaluation_forms")
@EntityListeners(AuditingEntityListener.class)
public class EvaluationForm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "module_id", nullable = false)
    private Long moduleId;
    @Column(name = "teacher_id", nullable = false)
    private Long teacherId;
    @Column(name = "subject_id", nullable = false)
    private Long subjectId;
    @Column(name = "num_of_hours", nullable = false)
    private int numOfHours;
    @Column(name = "avg_grade_group", nullable = false)
    private int averageGradeGroup;
    @Column(name = "payment_status", nullable = false)
    private String paymentStatus;
    @Column(name = "first_enrollment", nullable = false)
    private boolean firstEnrollment;
    @Column(name = "passed_exam", nullable = false)
    private boolean passedExam;
    @Column(name = "regular_attendance", nullable = false)
    private boolean regularAttendance;
    @Column(name = "question1", nullable = false)
    private int question1;
    @Column(name = "question2", nullable = false)
    private int question2;
    @Column(name = "question3", nullable = false)
    private int question3;
    @Column(name = "question4", nullable = false)
    private int question4;
    @Column(name = "question5", nullable = false)
    private int question5;
    @Column(name = "question6", nullable = false)
    private int question6;
    @Column(name = "question7", nullable = false)
    private int question7;
    @Column(name = "question8", nullable = false)
    private int question8;
    @Column(name = "question9", nullable = false)
    private int question9;
    @Column(name = "question10", nullable = false)
    private int question10;
    @Column(name = "question11", nullable = false)
    private int question11;
    @Column(name = "question12", nullable = false)
    private int question12;
    @Column(name = "comment")
    private String comment;

    public EvaluationForm(EvaluationFormDTO form) {
        this.moduleId = form.getModule().getId();
        this.teacherId = form.getTeacher().getId();
        this.subjectId = form.getSubject().getId();
        this.numOfHours = form.getNumOfHours();
        this.averageGradeGroup = form.getAverageGradeGroup();
        this.paymentStatus = form.getPaymentStatus();
        this.firstEnrollment = form.isFirstEnrollment();
        this.passedExam = form.isPassedExam();
        this.regularAttendance = form.isRegularAttendance();
        this.question1 = form.getQuestion1();
        this.question2 = form.getQuestion2();
        this.question3 = form.getQuestion3();
        this.question4 = form.getQuestion4();
        this.question5 = form.getQuestion5();
        this.question6 = form.getQuestion6();
        this.question7 = form.getQuestion7();
        this.question8 = form.getQuestion8();
        this.question9 = form.getQuestion9();
        this.question10 = form.getQuestion10();
        this.question11 = form.getQuestion11();
        this.question12 = form.getQuestion12();
        this.comment = form.getComment();
    }

    public EvaluationForm() {

    }

    public long getId() {
        return id;
    }

    public Long getModuleId() {
        return moduleId;
    }

    public void setModuleId(Long moduleId) {
        this.moduleId = moduleId;
    }

    public Long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Long teacherId) {
        this.teacherId = teacherId;
    }

    public Long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;
    }

    public int getNumOfHours() {
        return numOfHours;
    }

    public void setNumOfHours(int numOfHours) {
        this.numOfHours = numOfHours;
    }

    public int getAverageGradeGroup() {
        return averageGradeGroup;
    }

    public void setAverageGradeGroup(int averageGradeGroup) {
        this.averageGradeGroup = averageGradeGroup;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public boolean isFirstEnrollment() {
        return firstEnrollment;
    }

    public void setFirstEnrollment(boolean firstEnrollment) {
        this.firstEnrollment = firstEnrollment;
    }

    public boolean isPassedExam() {
        return passedExam;
    }

    public void setPassedExam(boolean passedExam) {
        this.passedExam = passedExam;
    }

    public boolean isRegularAttendance() {
        return regularAttendance;
    }

    public void setRegularAttendance(boolean regularAttendance) {
        this.regularAttendance = regularAttendance;
    }

    public int getQuestion1() {
        return question1;
    }

    public void setQuestion1(int question1) {
        this.question1 = question1;
    }

    public int getQuestion2() {
        return question2;
    }

    public void setQuestion2(int question2) {
        this.question2 = question2;
    }

    public int getQuestion3() {
        return question3;
    }

    public void setQuestion3(int question3) {
        this.question3 = question3;
    }

    public int getQuestion4() {
        return question4;
    }

    public void setQuestion4(int question4) {
        this.question4 = question4;
    }

    public int getQuestion5() {
        return question5;
    }

    public void setQuestion5(int question5) {
        this.question5 = question5;
    }

    public int getQuestion6() {
        return question6;
    }

    public void setQuestion6(int question6) {
        this.question6 = question6;
    }

    public int getQuestion7() {
        return question7;
    }

    public void setQuestion7(int question7) {
        this.question7 = question7;
    }

    public int getQuestion8() {
        return question8;
    }

    public void setQuestion8(int question8) {
        this.question8 = question8;
    }

    public int getQuestion9() {
        return question9;
    }

    public void setQuestion9(int question9) {
        this.question9 = question9;
    }

    public int getQuestion10() {
        return question10;
    }

    public void setQuestion10(int question10) {
        this.question10 = question10;
    }

    public int getQuestion11() {
        return question11;
    }

    public void setQuestion11(int question11) {
        this.question11 = question11;
    }

    public int getQuestion12() {
        return question12;
    }

    public void setQuestion12(int question12) {
        this.question12 = question12;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
