package org.example.diary.service;

import org.example.diary.dto.EntryDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class EntryServiceImplTest {

    @Autowired
    public EntryServiceImplTest(EntryService entryService) {
        this.entryService = entryService;
    }

    private final EntryService entryService;

    @Test
    public void testSaveEntry() {
        EntryDTO entryDTO = new EntryDTO();
        entryDTO.setHeading("Test heading");
        entryDTO.setText("Test text");

        EntryDTO savedDTO = entryService.createEntry(entryDTO);
        assertNotNull(savedDTO.getId());
        assertEquals(entryDTO.getHeading(), savedDTO.getHeading());
        assertEquals(entryDTO.getText(), savedDTO.getText());
    }
}