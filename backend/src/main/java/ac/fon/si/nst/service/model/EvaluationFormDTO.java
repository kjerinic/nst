package ac.fon.si.nst.service.model;

import ac.fon.si.nst.domain.Module;
import ac.fon.si.nst.domain.Subject;
import ac.fon.si.nst.domain.Teacher;

public class EvaluationFormDTO {
    private Module module;
    private Teacher teacher;
    private Subject subject;
    private int numOfHours;
    private int averageGradeGroup;
    private String paymentStatus;
    private boolean firstEnrollment;
    private boolean passedExam;
    private boolean regularAttendance;
    private String question1;
    private String question2;
    private String question3;
    private String question4;
    private String question5;
    private String question6;
    private String question7;
    private String question8;
    private String question9;
    private String question10;
    private String question11;
    private String question12;
    private String comment;

    public Module getModule() {
        return module;
    }

    public void setModule(Module module) {
        this.module = module;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
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

    public String getQuestion1() {
        return question1;
    }

    public void setQuestion1(String question1) {
        this.question1 = question1;
    }

    public String getQuestion2() {
        return question2;
    }

    public void setQuestion2(String question2) {
        this.question2 = question2;
    }

    public String getQuestion3() {
        return question3;
    }

    public void setQuestion3(String question3) {
        this.question3 = question3;
    }

    public String getQuestion4() {
        return question4;
    }

    public void setQuestion4(String question4) {
        this.question4 = question4;
    }

    public String getQuestion5() {
        return question5;
    }

    public void setQuestion5(String question5) {
        this.question5 = question5;
    }

    public String getQuestion6() {
        return question6;
    }

    public void setQuestion6(String question6) {
        this.question6 = question6;
    }

    public String getQuestion7() {
        return question7;
    }

    public void setQuestion7(String question7) {
        this.question7 = question7;
    }

    public String getQuestion8() {
        return question8;
    }

    public void setQuestion8(String question8) {
        this.question8 = question8;
    }

    public String getQuestion9() {
        return question9;
    }

    public void setQuestion9(String question9) {
        this.question9 = question9;
    }

    public String getQuestion10() {
        return question10;
    }

    public void setQuestion10(String question10) {
        this.question10 = question10;
    }

    public String getQuestion11() {
        return question11;
    }

    public void setQuestion11(String question11) {
        this.question11 = question11;
    }

    public String getQuestion12() {
        return question12;
    }

    public void setQuestion12(String question12) {
        this.question12 = question12;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
