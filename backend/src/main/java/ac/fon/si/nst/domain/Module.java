package ac.fon.si.nst.domain;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;

@SuppressWarnings("JpaDataSourceORMInspection")
@Entity
@Table(name = "modules")
@EntityListeners(AuditingEntityListener.class)
public class Module {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    /**
     * Gets id.
     * @return the id
     */

    public long getId() {
        return id;
    }

    /**
     * Gets name.
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * Sets name.
     * @param name the name
     */

    public void setName(String name) {
        this.name = name;
    }

}
