package ac.fon.si.nst.domain;

import java.util.List;

public class TeacherEvaluationOverviewDTO {
    private long teacherId;
    private long averageQuestionGrade;
    private List<String> comments;

    public TeacherEvaluationOverviewDTO() {
    }

    public long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(long teacherId) {
        this.teacherId = teacherId;
    }

    public long getAverageQuestionGrade() {
        return averageQuestionGrade;
    }

    public void setAverageQuestionGrade(long averageQuestionGrade) {
        this.averageQuestionGrade = averageQuestionGrade;
    }

    public List<String> getComments() {
        return comments;
    }

    public void setComments(List<String> comments) {
        this.comments = comments;
    }
}
