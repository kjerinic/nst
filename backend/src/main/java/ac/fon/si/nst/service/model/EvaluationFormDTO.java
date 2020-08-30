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
    private int question1;
    private int question2;
    private int question3;
    private int question4;
    private int question5;
    private int question6;
    private int question7;
    private int question8;
    private int question9;
    private int question10;
    private int question11;
    private int question12;
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
